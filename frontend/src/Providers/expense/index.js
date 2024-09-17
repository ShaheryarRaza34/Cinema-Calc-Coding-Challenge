import service from "../../Services/core";
import { useQuery, useMutation, useQueryClient } from "react-query";

export function useExpense() {
  const queryData =
    useQuery({
      queryKey: 'expenses',
      queryFn: () => service({ url: "/get-all-expenses", method: "GET" }),
    });
    return queryData


}

export function useCreateExpense() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: "addExpense",
    mutationFn: (props) =>
      service({ url: "/create-expense", method: "POST", body: props }),
    onSuccess: () => {
      queryClient.invalidateQueries("expenses");
    },
  });
}

export function useDeleteExpense() {
  const queryClient = useQueryClient();
  return useMutation( {
    mutationKey: "deleteExpense",
    mutationFn: (props) => service({ url: `/delete-expense/${props.id}`, method: "DELETE"}),
    onSuccess: () => {
      queryClient.invalidateQueries("expenses");
    },
  });
}


export function useEditExpense(id, expense) {
  const queryClient = useQueryClient();
  return useMutation( {
    mutationKey: "editExpense",
    mutationFn: (props) => service({ url: `/update-expense/${props.id}`, method: "PATCH", body: props }),
    onSuccess: () => {
      queryClient.invalidateQueries("expenses");
    },
  });
}