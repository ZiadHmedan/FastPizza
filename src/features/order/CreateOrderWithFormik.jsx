import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddress, getUser } from '../user/userSlice';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { getCart, getTotalPrice } from '../cart/cartSlice';
import { createOrder } from '../../services/apiRestaurant';
import { useNavigate } from 'react-router-dom';
// import { redirect } from 'react-router-dom';

export default function CreateOrderWithFormik() {
  //   const history = useHistory(); // Use the useHistory hook for redirection

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const user = useSelector(getUser);
  const totalCartPrice = useSelector(getTotalPrice);
  //   const totalPrice = withPriority ? totalCartPrice * 0.2 : totalCartPrice;
  const {
    username,
    address,
    status: addressStatus,
    position,
    error: errorAddress,
  } = user;

  const isLoadingAddress = addressStatus === 'loading';

  const initialValue = {
    customer: username,
    phone: '',
    address: address,
    priority: false,
  };
  const validationSchema = Yup.object({
    customer: Yup.string().required('Required'),
    phone: Yup.string()
      .matches(
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        'Please give us your correct phone number. We might need it to contact you.'
      )
      .required('Required'),
    address: Yup.string().required('Required'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    const order = {
      ...values,
      cart,
    };
    console.log('youyou', order);
    const newOrder = await createOrder(order);
    console.log('newOore', newOrder);
    navigate(`/order/${newOrder.id}`);
    // return redirect(`/order/${newOrder.id}`);
  };
  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          //   console.log(formik.values);
          return (
            <Form>
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                <label className="sm:basis-40">First Name</label>
                <div className="grow">
                  <Field className="input grow" type="text" name="customer" />
                  {formik.errors.customer && formik.touched.customer ? (
                    <div className="text-red-500">{formik.errors.customer}</div>
                  ) : null}
                </div>
              </div>

              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                <label className="sm:basis-40">Phone number</label>
                <div className="grow">
                  <Field className="input w-full" type="tel" name="phone" />
                  {formik.errors.phone && formik.touched.phone ? (
                    <div className="text-red-500">{formik.errors.phone}</div>
                  ) : null}
                </div>
              </div>

              <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                <label className="sm:basis-40">Address</label>
                <div className="grow">
                  <Field
                    className="input w-full"
                    type="text"
                    name="address"
                    // value={address}
                    disabled={isLoadingAddress}
                  />
                  {addressStatus === 'error' && (
                    <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                      {errorAddress}
                    </p>
                  )}
                </div>
                {!position.latitude && !position.longitude && (
                  <span className="absolute right-[3px] top-[3px] z-50 md:right-[5px] md:top-[5px]">
                    <Button
                      type="small"
                      disabled={isLoadingAddress}
                      onClick={() => dispatch(fetchAddress())}
                    >
                      Get position
                    </Button>
                  </span>
                )}
              </div>

              <div className="mb-12 flex items-center gap-5">
                <Field
                  className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
                  type="checkbox"
                  name="priority"
                  id="priority"
                  //   value={withPriority}
                  //   onChange={(e) => setWithPriority(e.target.checked)}
                />
                <label htmlFor="priority" className="font-medium">
                  Want to yo give your order priority?
                </label>
              </div>
              <div>
                <input type="hidden" name="cart" value={JSON.stringify(cart)} />
                <Button
                  disabled={formik.isSubmitting}
                  type="primary"
                  type1="submit"
                >
                  {formik.isSubmitting
                    ? 'Placing order....'
                    : `Order now from ${formatCurrency(
                        formik.values.priority
                          ? totalCartPrice * 0.2 + totalCartPrice
                          : totalCartPrice
                      )}`}
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
