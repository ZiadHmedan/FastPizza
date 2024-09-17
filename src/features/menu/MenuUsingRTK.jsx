// // import { useDispatch, useSelector } from 'react-redux';
// // import { fetchMenu, getMenuItems } from './menuSlice';
// // import { useEffect } from 'react';
// // import { useLoaderData } from 'react-router-dom';
// import MenuItem from './MenuItem';
// import { useGetMenusQuery } from '../api/apiSlice';
// import Loader from '../../ui/Loader';

// function Menu() {
//   const { data: menu, isError, isLoading, isSuccess } = useGetMenusQuery();

//   return (
//     <ul className="divide-y divide-stone-200 px-2">
//       {isLoading && <Loader />}

//       {isSuccess &&
//         menu?.data?.map((pizza) => <MenuItem pizza={pizza} key={pizza.id} />)}
//         {isError && <p>error</p>}
//     </ul>
//   );
// }

// export default Menu;
