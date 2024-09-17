import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

export default function UpdateOrder() {
   const fetcher =  useFetcher();
  return (
    <fetcher.Form className="text-right" method='patch'>
      <Button type={"primary"} >
          make priority
      </Button>
    </fetcher.Form>
  )
}
export async function action({params}) {
  const data = { priority: true };
    await  updateOrder(params.orderId,data)
  return null;
}