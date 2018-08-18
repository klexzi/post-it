import LoginForm from "../../components/LoginForm.jsx";

describe("LoginForm Component", () => {
  it("should handle the email input correctly", () => {
    const handleEmailInput = jest.fn();

    expect(handleEmailInput).toBeCalled();
  });
});
