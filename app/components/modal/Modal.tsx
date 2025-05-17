import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Components
import ButtonCmp from "../button/Button";
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
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      hideCloseButton
      placement="center"
    >
      <ModalContent className="mt-8">
        {(onClose) => (
          <>
            <ModalHeader className={s.modalHeader}>
              <Button
                startContent={<Arrow />}
                className="mb-2 w-20 pr-3 pl-[6px]"
                onPress={onClose}
              >
                Back
              </Button>
              <p className={s.name}>{currentCase?.name}</p>
            </ModalHeader>
            <ModalBody className={s.modalBody}>
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
                slidesPerView="auto"
                key={1}
              >
                {currentCase?.images.map((image, i) => (
                  <SwiperSlide
                    key={i}
                    className="rounded-sm overflow-hidden w-80 mx-auto flex justify-center"
                  >
                    {/* <div className={s.imageSlider}> */}
                    <Image
                      src={image}
                      alt="case presentaion"
                      className={clsx(s.image)}
                    />
                    {/* </div> */}
                    <div className="py-5"></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ModalBody>
            <ModalFooter className={s.modalFooter}>
              <p className={clsx(s.text)}>{currentCase?.text}</p>
              <ButtonCmp
                text="Order"
                bgColor="red"
                onClick={onClose}
                styles="w-full"
                noAnimate
              />
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ModalCmp;
