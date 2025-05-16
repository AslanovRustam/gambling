import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ButtonCmp from "../button/Button";
import Arrow from "../../../public/icons/arrow-left.svg";
import { ICase } from "@/types";
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
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 py-3 px-3">
              <Button
                startContent={<Arrow />}
                className="mb-4 w-20 pr-3 pl-[6px]"
                onPress={onClose}
              >
                Back
              </Button>
              <p className={s.name}>{currentCase?.name}</p>
            </ModalHeader>
            <ModalBody>
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
                    className="rounded-sm overflow-hidden w-80"
                    key={i}
                  >
                    <Image
                      src={image}
                      alt="case presentaion"
                      className="w-full rounded-2xl overflow-hidden"
                    />
                    <div className="py-5"></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ModalBody>
            <ModalFooter>
              <ButtonCmp
                text="Order"
                bgColor="red"
                onClick={onClose}
                styles="w-full"
              />
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ModalCmp;
