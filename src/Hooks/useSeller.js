import { useEffect, useState } from 'react';

const useSeller = email => {
   const [isSeller, setisSeller] = useState(false);
   const [selletLoadnig, setSelletLoadnig] = useState(true);

   useEffect(() => {
      fetch(`https://interverse.vercel.app/user/seller/${email}`)
         .then(res => res.json())
         .then(data => {
            setisSeller(data.isSeller)
            setSelletLoadnig(false)
         },
         )
   }, [email, selletLoadnig])

   return [isSeller, selletLoadnig]
};

export default useSeller;