import { useEffect, useState } from "react";

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminloading, setIsAdminloading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:2100/user/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin)
                setIsAdminloading(false)
            })
    }, [email])
    return [isAdmin, isAdminloading]
};
export default useAdmin;