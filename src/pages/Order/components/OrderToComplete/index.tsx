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
  Container as ContainerV2,
} from "./DeliveryAdress/styles";
import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
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
import { listOfUfs } from "./listOfUds";

const adressFormSchema = yup.object({
  cep: yup
    .number()
    .typeError("CEP é obrigatório")
    .required("CEP é obrigatório"),
  street: yup.string().required("Rua é obrigatório"),
  number: yup
    .number()
    .typeError("Número é obrigatório")
    .required("Número é obrigatório"),
  complement: yup.string(),
  neighborhood: yup.string().required("Bairro é obrigatório"),
  city: yup.string().required("Cidade é obrigatório"),
  uf: yup.string().required("UF é obrigatório").min(2).max(2),
  paymentMethod: yup.string().required("Selecione uma forma de pagamento"),
});

interface AddNewAdressProps {
  cep: number;
  street: string;
  number: number;
  complement?: string | undefined;
  neighborhood: string;
  city: string;
  uf: string;
  paymentMethod?: string | undefined;
}

export const OrderToComplete = () => {
  const [quantity, setQuantity] = useState(1);

  const onQtyChange = (value: number) => {
    setQuantity(value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(adressFormSchema),
  });

  const [adress, setAdress] = useState<AddNewAdressProps>();

  const handleAddNewAdreess = (data: AddNewAdressProps) => {
    9;
    setAdress(data);
  };

  console.log(adress);

  return (
    <Container onSubmit={handleSubmit(handleAddNewAdreess)}>
      <AdressAndPaymentContainer>
        <Title>Complete seu pedido</Title>
        <ContainerV2>
          <section>
            <MapPinLine size={22} color={DefaultTheme.colors.yellowDark} />
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </section>

          <AdressContainer>
            <div>
              <input
                type="number"
                placeholder="CEP"
                {...register("cep")}
                onBlur={() => trigger("cep")}
              />
              <p>{errors.cep && errors.cep.message}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Rua"
                {...register("street")}
                onBlur={() => trigger("street")}
              />
              <p>{errors.street && errors.street.message}</p>
            </div>
            <div>
              <input
                type="number"
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
                onBlur={() => trigger("neighborhood")}
              />
              <p>{errors.neighborhood && errors.neighborhood.message}</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Cidade"
                {...register("city")}
                onBlur={() => trigger("city")}
              />
              <p>{errors.city && errors.city.message}</p>
            </div>
            <div>
              <select
                {...register("uf")}
                defaultValue=""
                onBlur={() => trigger("uf")}
              >
                <option value="" disabled hidden>
                  UF
                </option>
                {listOfUfs.map((uf) => (
                  <option key={uf}>{uf}</option>
                ))}
              </select>
              <p>{errors.uf && errors.uf.message}</p>
            </div>
          </AdressContainer>
        </ContainerV2>
        <ContainerV2>
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
        </ContainerV2>
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
      </div>
    </Container>
  );
};
