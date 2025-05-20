"use client";
import { ChangeEvent, useState } from "react";
import clsx from "clsx";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Textarea,
} from "@heroui/react";
import ButtonCmp from "../button/Button";
import CloseIcon from "../../../public/icons/close.svg";
import coin from "../../../public/Coin.png";
import s from "./form.module.css";
import Image from "next/image";

type Props = {
  variant: string;
  parrentClose?: () => void;
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Form({ variant, parrentClose }: Props) {
  const { isOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isRequestSent, setSsRequestSent] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!res.ok) return;

      setSsRequestSent(true);

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Ошибка при отправке формы:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    onOpenChange();
    parrentClose?.();
  };

  const renderButton =
    variant === "header" ? (
      <div className="hidden lg:flex align-middle gap-2 z-[1]">
        {/* <DropDownCmp /> */}
        <ButtonCmp text={"Let’s Talk"} bgColor="red" onClick={onOpenChange} />
      </div>
    ) : variant === "hero" ? (
      <div className="w-fit">
        <ButtonCmp text="Let’s Talk" bgColor="red" onClick={onOpenChange} />
      </div>
    ) : variant === "service" ? (
      <ButtonCmp text={"Book a call"} bgColor="red" onClick={onOpenChange} />
    ) : variant === "howWeWork" ? (
      <ButtonCmp text="Let's Talk" bgColor="red" onClick={onOpenChange} />
    ) : variant === "cta" ? (
      <div className="mt-10 flex">
        <ButtonCmp text="Book a call" bgColor="red" onClick={onOpenChange} />
      </div>
    ) : variant === "burger" ? (
      <ButtonCmp text={"Let’s Talk"} bgColor="red" onClick={onOpenChange} />
    ) : variant === "work" ? (
      <ButtonCmp
        text="Order"
        bgColor="red"
        onClick={onOpenChange}
        styles="w-full mb-4"
        noAnimate
      />
    ) : (
      ""
    );

  return (
    <>
      {renderButton}
      <Modal
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
        backdrop="blur"
        key={11}
        hideCloseButton
        className="max-w-[370px]"
      >
        <ModalContent className="relative">
          {(onClose) => (
            <>
              {isRequestSent ? (
                <div className={s.reauestSent}>
                  <Image src={coin} alt="success coin" className={s.coin} />
                  <div className={s.sucessContainer}>
                    <p className={s.sucessTitle}>
                      Your application is accepted
                    </p>
                    <p className={s.sucessText}>
                      Our managers will contact you shortly
                    </p>
                  </div>
                  <ButtonCmp
                    text="OK"
                    bgColor="red"
                    styles="w-full"
                    onClick={handleCloseModal}
                    disabled={loading}
                  />
                </div>
              ) : (
                <>
                  <CloseIcon className={s.closeIcon} onClick={onClose} />
                  <ModalHeader className={s.header}>Send Request</ModalHeader>
                  <ModalBody className="flex flex-col gap-4">
                    <Input
                      name="name"
                      label="Name"
                      placeholder="Enter your Name"
                      type="text"
                      variant="bordered"
                      labelPlacement="outside"
                      value={formData.name}
                      onChange={handleInputChange}
                      isInvalid={!!errors.name}
                      errorMessage={errors.name}
                      className={s.input}
                      classNames={{
                        label: clsx(
                          !!errors.name ? s.labelError : s.labelNormal
                        ),
                        inputWrapper: !!errors.name
                          ? s.inputError
                          : s.inputNormal,
                        errorMessage: !!errors.name && s.labelError,
                      }}
                    />
                    <Input
                      name="email"
                      label="Email"
                      placeholder="Enter your email"
                      variant="bordered"
                      labelPlacement="outside"
                      value={formData.email}
                      onChange={handleInputChange}
                      isInvalid={!!errors.email}
                      errorMessage={errors.email}
                      className={s.input}
                      classNames={{
                        label: clsx(
                          !!errors.email ? s.labelError : s.labelNormal
                        ),
                        inputWrapper: !!errors.email
                          ? s.inputError
                          : s.inputNormal,
                        errorMessage: !!errors.email && s.labelError,
                      }}
                    />
                    <Textarea
                      name="message"
                      label="Your wishes"
                      placeholder="text your wish here..."
                      type="text"
                      variant="bordered"
                      labelPlacement="outside"
                      minRows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      classNames={{
                        label: clsx(s.labelNormal),
                      }}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <ButtonCmp
                      text={
                        loading ? (
                          <span>
                            Sending &nbsp;
                            <span className={s.dots} />
                          </span>
                        ) : (
                          "Submit your application"
                        )
                      }
                      bgColor="red"
                      styles={clsx("mr-auto ml-auto", loading && "opacity-40")}
                      onClick={handleSubmit}
                      disabled={loading}
                    />
                  </ModalFooter>
                </>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Form;
