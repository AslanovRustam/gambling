"use client";
import ButtonCmp from "../button/Button";
import s from "./form.module.css";
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

type Props = {
  variant: string;
  parrentClose?: () => void;
};

function Form({ variant, parrentClose }: Props) {
  const { isOpen, onOpenChange } = useDisclosure();

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
        placement="top-center"
        onOpenChange={onOpenChange}
        backdrop="blur"
        key={11}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className={s.header}>Send Request</ModalHeader>
              <ModalBody className="flex flex-col gap-4">
                <Input
                  label="Name"
                  placeholder="Enter your Name"
                  type="text"
                  variant="bordered"
                  labelPlacement="outside"
                  className={s.input}
                  classNames={{
                    label: "text-[#A1A1AA] font-involve text-[12px]",
                  }}
                />
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  labelPlacement="outside"
                />
                <Textarea
                  label="Your wishes"
                  placeholder="text your wish here..."
                  type="text"
                  variant="bordered"
                  labelPlacement="outside"
                  minRows={3}
                />
              </ModalBody>
              <ModalFooter>
                <ButtonCmp
                  text="Submit your application"
                  bgColor="red"
                  styles="mr-auto ml-auto"
                  onClick={() => {
                    onClose();
                    if (!parrentClose) return;
                    parrentClose();
                  }}
                />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Form;
