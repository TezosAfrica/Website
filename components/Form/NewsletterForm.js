import { useState } from "react";
import { decode } from "html-entities";
import { Formik } from "formik";
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  HStack,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { HiOutlineArrowRight } from "react-icons/hi";

const NewsletterForm = ({ status, message, onValidated, translate }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      const isFormValidated = await onValidated({
        EMAIL: values.email,
        COURSE: values.course,
      });

      if (status === "success") {
        email && email.indexOf("@") > -1 && isFormValidated;
        resetForm({});
      }
      setStatus({ success: true });
    } catch (error) {
      setError(true);
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };

  return (
    <Formik initialValues={{ email: "" }} onSubmit={onSubmit}>
      {({ values, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Flex align="end">
            <FormControl w={{ md: 115 }}>
              <FormHelperText color="gray.100" mb={2} ml={6}>
                {translate.email}
              </FormHelperText>
              <HStack align="center" borderWidth={1} rounded="md" p={1}>
                <Input
                  size="lg"
                  type="email"
                  name="email"
                  placeholder={translate.placeholder}
                  _placeholder={{ color: "white" }}
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  _focus={{ outline: "none" }}
                />
                <Button
                  type="submit"
                  px={{ base: 8, md: 16 }}
                  h={12}
                  color="brand.red"
                  bg="brand.yellow"
                  rightIcon={<Icon as={HiOutlineArrowRight} />}
                  isLoading={isSubmitting}
                >
                  {translate.submit}
                </Button>
              </HStack>
            </FormControl>
          </Flex>

          <div className="newsletter-form-info">
            {status === "error" || error ? (
              <Text fontSize="sm" color="red.400">
                This email is already subscribed. Try a different one.
              </Text>
            ) : null}
            {status === "success" && status !== "error" && !error && (
              <Text
                fontSize="sm"
                color="green.600"
                dangerouslySetInnerHTML={{ __html: decode(message) }}
              />
            )}
          </div>
        </form>
      )}
    </Formik>
  );
};

export default NewsletterForm;
