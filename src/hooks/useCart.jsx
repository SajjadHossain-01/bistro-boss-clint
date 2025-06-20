import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const{user}=useAuth()
    const axiosSecure = useAxiosSecure();
  const {refetch, data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
        const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  })
  return [cart, refetch]

};

export default useCart;
