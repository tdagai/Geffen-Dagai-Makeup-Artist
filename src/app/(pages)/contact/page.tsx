'use client'

// import { useForm, Resolver } from "react-hook-form"
import { GenericGrid, StyledButton } from "@components/index";
import styled from "styled-components";
import * as z from "zod";
import StylesDropdown from "./stylesDropdown";

const applicationStyleOptions = [
  {value: "natural", label: "Natural"},
  {value: "soft_glam", label: "Soft Glam"},
  {value: "full_glam", label: "Full Glam"},
  {value: "editorial_creative", label: "Editorial/Creative"},
  {value: "period", label: "Period"},
  {value: "sfx", label: "SFX"}
];

const contactFormSchema = z.object({
  firstName: z.string().max(30).nonempty(),
  lastName: z.string().max(30).nonempty(),
  email: z.email().max(30).nonempty(),
  phoneNumber: z.string().nonempty(),
  // applicationType: z.literal(applicationStyleOptions),
  messageSubject: z.string().nonempty(),
  messageBody: z.string().nonempty()
})

// type FormValues = {
//   firstName: string,
//   lastName: string,
//   email: string,
//   phoneNumber: string,
//   applicationStyle: string,
//   messageSubject: string,
//   messageBody: string,
// }

const ContactPage = () => {
  return (
    <GenericGrid as="div" className="gap-y-8">
      <h1 className="font-young text-primary col-span-4 col-start-1 mx-6 mt-6 whitespace-pre-line text-center md:col-span-12 md:mt-12">
        {`Want to book me for your next project?
        All you have to do is reach out!`}
      </h1>

      <StyledForm>
        <InputWrapper>
          <StyledLabel htmlFor="firstName">First Name</StyledLabel>
          <GenericInput name="firstName" />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
          <GenericInput name="lastName" />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <GenericInput name="email" type="email" />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
          <GenericInput name="phoneNumber" type="tel" />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor="applicationType">Application Type</StyledLabel>
          <StylesDropdown options={applicationStyleOptions} />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel htmlFor="messageSubject">Subject</StyledLabel>
          <GenericInput name="messageSubject" />
        </InputWrapper>
        <InputWrapper>
          <StyledLabel>Message</StyledLabel>
          <StyledTextarea />
        </InputWrapper>

        <StyledButton className="mx-auto md:mt-6">
          Send Message
        </StyledButton>
      </StyledForm>
    </GenericGrid>
  )
}

const StyledForm = styled.form`
  grid-column: 3 / span 8;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: var(--secondary);
  box-shadow: var(--shadow-big);
  border-radius: var(--radius-2xl);
  padding: 4rem;
  padding-bottom: 2rem;
  border: 2px solid #000;

  @media screen and (max-width: 768px) {
    grid-column: 1 / span 4;
    padding: 1rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-family: var(--font-young-serif);
  color: var(--primary);
`;

const GenericInput = styled.input`
  border: 2px solid var(--primary);
  border-radius: var(--radius-xl);
  corner-shape: squircle;
  padding: .75rem .75rem;
  background-color: var(--terchiary);

  transition: all .2s;

  &:hover {
    border: 2px solid var(--color-emerald-600);
  }
`;

// const DropDownMenu = styled.select`
//   position: relative;
//   display: inline-block;
//   /* width: 200px; */
//   padding: .75rem;
//   border: 2px solid var(--primary);
//   border-radius: var(--radius-xl);
//   corner-shape: squircle;
//   background-color: var(--terchiary);
//   width: 100%;
//   cursor: pointer;

//   &::after {
//     position: absolute;
//     right: 15px;
//   }
// `;

const StyledTextarea = styled.textarea`
  border: 2px solid var(--primary);
  border-radius: var(--radius-xl);
  corner-shape: squircle;
  padding: .5rem;
  background-color: var(--terchiary);
  transition: border .25s;
  resize: none;
  height: 20rem;

  transition: all .2s;

  &:hover {
    border: 2px solid var(--color-emerald-600);
  }
`;



export default ContactPage;