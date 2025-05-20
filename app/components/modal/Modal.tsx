"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, Button } from "@heroui/react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Components
import Form from "../form/Form";
// Utils
import { ICase } from "@/types";
// Local
import Arrow from "../../../public/icons/arrow-left.svg";
import "swiper/css";
import "swiper/css/pagination";
import s from "./modal.module.css";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  currentCase: ICase | null;
};

function ModalCmp({ isOpen, onOpenChange, currentCase }: Props) {
  const [modalSize, setModalSize] = useState<"sm" | "3xl">("3xl");

  useEffect(() => {
    const checkScreenSize = () => {
      setModalSize(window.innerWidth < 1025 ? "sm" : "3xl");
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      hideCloseButton
      placement="center"
      size={modalSize}
      className="px-2 sm:px-0"
    >
      <ModalContent className="mt-8">
        {(onClose) => (
          <>
            <ModalHeader className={s.modalHeader}>
              <Button
                startContent={<Arrow />}
                className="mb-2 w-20 pr-3 pl-[6px] "
                onPress={onClose}
              >
                Back
              </Button>
              <p className={s.name}>{currentCase?.name}</p>
            </ModalHeader>
            <div className={s.content}>
              <div className={s.modalBody}>
                <Swiper
                  // pagination={true}
                  keyboard={{
                    enabled: true,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Navigation]}
                  spaceBetween={12}
                  slidesPerView={1}
                  key={1}
                  className="rounded-sm overflow-hidden w-80 mx-auto flex justify-center"
                >
                  {currentCase?.images.map((image, i) => (
                    <SwiperSlide
                      key={i}
                      className="rounded-sm overflow-hidden  mx-auto flex justify-center"
                    >
                      <Image
                        src={image}
                        alt="case presentaion"
                        className={clsx(s.image)}
                        quality={100}
                      />

                      <div className="pt-8"></div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className={s.modalFooter}>
                <p className={clsx(s.text)}>{currentCase?.text}</p>
                <Form variant="work" parrentClose={onClose} />
              </div>
            </div>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ModalCmp;
