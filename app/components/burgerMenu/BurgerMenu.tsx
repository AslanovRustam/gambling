"use client";
import { MotionConfig, motion } from "framer-motion";
import clsx from "clsx";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
// Animations
import { FlipLinkHover } from "../flipLink/FlipLinkHover";
// Components
import Form from "../form/Form";
// Utils
import { NAVIGATION_MENU } from "@/app/utils/constants";
// Local
import Logo from "../../../public/icons/logo.svg";
import s from "./burgermenu.module.css";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export const HamburgerButton = ({ onClick, isOpen }: Props) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={onClick}
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-[#ff1923]  right-[-2em]"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

interface PerspectiveInitial {
  opacity: number;
  rotateX: number;
  translateY: number;
  translateX: number;
}

interface PerspectiveEnter {
  opacity: number;
  rotateX: number;
  translateY: number;
  translateX: number;
  transition: {
    duration: number;
    delay: number;
    ease: [number, number, number, number];
    opacity: { duration: number };
  };
}

interface PerspectiveExit {
  opacity: number;
  transition: {
    duration: number;
    type: string;
    ease: [number, number, number, number];
  };
}

interface PerspectiveVariants {
  initial: PerspectiveInitial;
  enter: (i: number) => PerspectiveEnter;
  exit: PerspectiveExit;
}

export const perspective: PerspectiveVariants = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },

  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),

  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

export default function AnimatedHamburgerButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <HamburgerButton onClick={handleOpen} isOpen={isOpen} />
      </div>
      <Modal
        isOpen={isOpen}
        size="full"
        onClose={onClose}
        hideCloseButton
        className="px-[7.8em]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-1 justify-between items-center py-3 px-0 ">
                <a
                  href="https://clickable.agency/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Logo className="w-32 sm:w-48" />
                </a>
                <HamburgerButton onClick={onClose} isOpen={isOpen} />
              </ModalHeader>
              <ModalBody className="px-0">
                <nav className={clsx(s.list)}>
                  {NAVIGATION_MENU.map((item) => (
                    <li className={s.item} key={item.name}>
                      <a
                        href={`#${item.id}`}
                        className={s.link}
                        onClick={onClose}
                      >
                        <FlipLinkHover>{item.name}</FlipLinkHover>
                      </a>
                    </li>
                  ))}
                </nav>
              </ModalBody>
              <ModalFooter>
                <Form variant="burger" />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
