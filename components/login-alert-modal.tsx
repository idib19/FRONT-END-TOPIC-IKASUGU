"use client"

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/loginModal";
import { Button } from "@/components/ui/button-variant";

interface AlertModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    loading

}) => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }


    return (
        <Modal
            title="Connexion requise"
            description="Connectez-vous ou créez un compte pour passer une commande"
            isOpen={isOpen}
            onClose={onClose}
        >

            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button disabled={loading} variant="outline" onClick={onConfirm}>
                    Connexion
                </Button>
                <Button disabled={loading} variant="destructive" onClick={onClose}>
                    Annuler
                </Button>
            </div>
        </Modal>
    )
}