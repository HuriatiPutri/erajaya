import { useMutation, useQuery } from "@tanstack/react-query";
import Fetch from "./fetch";

export function GetData(options, callback){
    const response = useQuery({
        queryKey: [options.queryKey],
        initialData: [],
        queryFn: async () => {
            const res = await Fetch(options);
            callback && callback(res);
            return res;
        },
    })

    const { isError, isFetching } = response;
    if (isError && !isFetching) {
        callback && callback(response);
        return response;
    }        
    // if no loading or error, return the data
    return response;
}

export function GetSingleData(options,id, callback){
    const response = useQuery({
        queryKey: [options.queryKey, id],
        enabled: !!id,
        initialData: {},
        queryFn: async () => {
            const res = await Fetch(options);
            callback && callback(res);
            return res;
        },
    })

    const { isError, isFetching } = response;
    if (isError && !isFetching) {
        callback && callback(response);
        return response;
    }        
    // if no loading or error, return the data
    return response;
}

export function Mutation(options, callback){
    return useMutation({
        mutationKey: options.mutationKey,
        mutationFn: async () => {
            const res = await Fetch({...options, data: payload });
            return res;
        },
        onSuccess: (data) => {
            // console.log('PostData', data);
          callback && callback(data);
        },
        onError: (error) => {
            // console.log('PostDataErr', error);
          callback && callback(error);
        }
    })
}