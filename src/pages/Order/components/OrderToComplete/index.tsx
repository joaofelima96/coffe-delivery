import {
  AdressAndPaymentContainer,
  CartContainer,
  Container,
  PriceContainer,
  PriceInfos,
  Title,
  Total,
  TotalItemsAndDelivery,
} from "./styles";
import coffe from "../../../../assets/coffes/expresso-tradicional.svg";
import { useForm } from "react-hook-form";
import {
  AdressContainer,
  PaymentAndAddressContainer,
  FindCepContainer,
} from "./DeliveryAdress/styles";
import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MagnifyingGlass,
  MapPinLine,
  Money,
  Trash,
} from "@phosphor-icons/react";
import { DefaultTheme } from "../../../../styles/DefaultTheme";
import {
  Divider,
  InfoContainer,
  ItemContainer,
  ItemInfoContainer,
  QttyContainer,
} from "./CartItems/styles";
import { Counter } from "../../../../components/Counter";
import { useState } from "react";
import { PaymentContainer, PaymentFormatContainer } from "./Payment/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import cep from "cep-promise";
import toast, { Toaster } from "react-hot-toast";

const adressFormSchema = yup.object({
  cep: yup
    .string()
    .required("CEP é obrigatório")
    .min(8, "Informe um CEP no formato válido"),
  street: yup.string().required("Rua é obrigatório"),
  number: yup
    .number()
    .typeError("Número é obrigatório")
    .required("Número é obrigatório"),
  complement: yup.string(),
  neighborhood: yup.string().required("Bairro é obrigatório"),
  city: yup.string().required("Cidade é obrigatório"),
  uf: yup.string().required("UF é obrigatório"),
  paymentMethod: yup.string().required("Selecione uma forma de pagamento"),
});

const initialState = {
  cep: "",
  street: "",
  number: 0,
  complement: "",
  neighborhood: "",
  city: "",
  uf: "",
  paymentMethod: "",
};

export const OrderToComplete = () => {
  type addNewAdressProps = yup.InferType<typeof adressFormSchema>;

  const [quantity, setQuantity] = useState(1);
  const [adress, setAdress] = useState<addNewAdressProps>(initialState);

  console.log(adress);

  const onQtyChange = (value: number) => {
    setQuantity(value);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(adressFormSchema),
  });

  const handleAddNewAdreess = (data: addNewAdressProps) => {
    9;
    setAdress(data);
  };

  const handleSearchCep = async (cepValue: string) => {
    if (!cepValue || cepValue.length <= 8) return;

    await cep(cepValue)
      .then((res) => {
        const adress = res;

        setValue("street", adress.street);
        setValue("neighborhood", adress.neighborhood);
        setValue("city", adress.city);
        setValue("uf", adress.state);
      })

      .catch(() => {
        toast("CEP não encontrado!", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const zipCodeMask = (value: string) => {
    if (!value) return "";
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    return value;
  };

  const handleZipCode = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { target } = e;
    if (target instanceof HTMLInputElement) {
      target.value = zipCodeMask(target.value);
    }
  };

  const notAllowedKeys = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !/[0-9\b]/.test(e.key) &&
      ![
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Delete",
        "Backspace",
        "Tab",
      ].includes(e.key)
    ) {
      e.preventDefault();
    }
  };

  const handleRedirect = () => {
    window.open(
      "https://www2.correios.com.br/sistemas/buscacep/buscacep.cfm",
      "_blank"
    );
  };

  return (
    <Container onSubmit={handleSubmit(handleAddNewAdreess)}>
      <AdressAndPaymentContainer>
        <Title>Complete seu pedido</Title>
        <PaymentAndAddressContainer>
          <section>
            <MapPinLine size={22} color={DefaultTheme.colors.yellowDark} />
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>

            <FindCepContainer>
              <MagnifyingGlass
                size={20}
                color={DefaultTheme.colors.white}
                onClick={() => handleRedirect()}
                cursor={"pointer"}
                style={{
                  background: "#DBAC2C",
                  opacity: 0.7,
                  borderRadius: "8px",
                  padding: 3,
                }}
              />
              <p>Não sei meu CEP</p>
            </FindCepContainer>
          </section>

          <AdressContainer>
            <div>
              <input
                type="text"
                placeholder="CEP"
                maxLength={9}
                onKeyDown={(e) => {
                  notAllowedKeys(e);
                }}
                onKeyUp={(e) => handleZipCode(e)}
                {...register("cep")}
                onBlur={(e) => {
                  trigger("cep");
                  handleSearchCep(e.target.value);
                }}
              />
              <p>{errors.cep && errors.cep.message}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Rua"
                {...register("street")}
                disabled
              />
              <p>{errors.street && errors.street.message}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Número"
                {...register("number")}
                onBlur={() => trigger("number")}
              />
              <p>{errors.number && errors.number.message}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Complemento"
                {...register("complement")}
              />
              <p>{errors.complement && errors.complement.message}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Bairro"
                {...register("neighborhood")}
                disabled
              />
              <p>{errors.neighborhood && errors.neighborhood.message}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Cidade"
                {...register("city")}
                disabled
              />
              <p>{errors.city && errors.city.message}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="UF"
                {...register("uf")}
                disabled
              />
              <p>{errors.uf && errors.uf.message}</p>
            </div>
          </AdressContainer>
        </PaymentAndAddressContainer>
        <PaymentAndAddressContainer>
          <section>
            <CurrencyDollarSimple
              size={22}
              color={DefaultTheme.colors.purple}
            />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </section>

          <PaymentContainer>
            <div>
              <PaymentFormatContainer>
                <label>
                  <input
                    type="radio"
                    id="credit"
                    value="credit"
                    {...register("paymentMethod")}
                  />
                  <div>
                    <CreditCard size={15} color={DefaultTheme.colors.purple} />
                    <span>CARTÃO DE CRÉDITO</span>
                  </div>
                </label>
              </PaymentFormatContainer>
              <PaymentFormatContainer>
                <label>
                  <input
                    type="radio"
                    id="debit"
                    value="debit"
                    {...register("paymentMethod")}
                  />
                  <div>
                    <Bank size={15} color={DefaultTheme.colors.purple} />
                    <span>CARTÃO DE DÉBITO</span>
                  </div>
                </label>
              </PaymentFormatContainer>
              <PaymentFormatContainer>
                <label>
                  <input
                    type="radio"
                    id="money"
                    value="money"
                    {...register("paymentMethod")}
                  />
                  <div>
                    <Money size={15} color={DefaultTheme.colors.purple} />
                    <span>DINHEIRO</span>
                  </div>
                </label>
              </PaymentFormatContainer>
            </div>
            {errors.paymentMethod && <p>{errors.paymentMethod.message}</p>}
          </PaymentContainer>
        </PaymentAndAddressContainer>
      </AdressAndPaymentContainer>

      <div>
        <Title>Selected Coffes</Title>

        <CartContainer>
          <>
            <ItemContainer>
              <div>
                <img src={coffe} width={64} height={64} alt="café" />
              </div>
              <ItemInfoContainer>
                <InfoContainer>
                  <span>Expresso Tradicional</span>
                  <span>R$ 9,90</span>
                </InfoContainer>
                <QttyContainer>
                  <Counter quantity={quantity} onQtyChange={onQtyChange} />
                  <div>
                    <Trash
                      size={16}
                      color={DefaultTheme.colors.purple}
                      weight="bold"
                    />
                    <span>REMOVER</span>
                  </div>
                </QttyContainer>
              </ItemInfoContainer>
            </ItemContainer>

            <Divider />
          </>

          <PriceContainer>
            <PriceInfos>
              <TotalItemsAndDelivery>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </TotalItemsAndDelivery>
              <TotalItemsAndDelivery>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </TotalItemsAndDelivery>
              <Total>
                <span>Total</span>
                <span>R$ 33,20</span>
              </Total>
            </PriceInfos>

            <button type="submit">CONFIRMAR PEDIDO</button>
          </PriceContainer>
        </CartContainer>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </Container>
  );
};
