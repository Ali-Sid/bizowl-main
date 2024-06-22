import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import thumbsup from "../assets/thumbsup.png";

function Popup() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // Automatically open the modal after 2 seconds
    const timer = setTimeout(() => {
      onOpen();
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [onOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <img style={{ width: "250px" }} src={thumbsup} alt="thumbsup" />
            <Heading>Please Note!</Heading>
            <Text>
              Sometimes the final prices of the quotations will be updated
              within 1-2 hrs. You will be notified on your WhatsApp. If you have
              any questions you can reach out to us at contact@bizzowl.com or
              call us at +919354651433.{" "}
            </Text>
          </ModalBody>

          {/* <ModalFooter
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Okay
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
export default Popup;
