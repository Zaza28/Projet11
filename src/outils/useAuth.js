import { useSelector } from "react-redux";

const useAuth = () => {
    const { token } = useSelector((state) => state.userSlice);
    return !!token; //renvoi true si user est co
}

export default useAuth;