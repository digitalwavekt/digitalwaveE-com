import { useState } from 'react';

export function useAuth() {
    const [user, setUser] = useState<{ name: string } | null>({ name: "John Doe" });

    const logout = () => {
        setUser(null);
        // Additional logout logic can be added here
    };

    return { user, logout };
}
