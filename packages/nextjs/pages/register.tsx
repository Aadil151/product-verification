import { useState } from "react";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";

const Register = () => {
  const [barcode, setBarcode] = useState("");

  const { refetch } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "isOwne",
    enabled: false,
    onSuccess: (data: unknown) => {
      if (data == true) {
        register();
      }
    },
  });

  const { write: register } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "registerProduct",
    args: [barcode],
    onSuccess: () => {
      notification.success("Registered barcode");
    },
  });

  const handleRegister = async () => {
    refetch();
  };

  return (
    <div className="flex items-center flex-col flex-grow pt-10 gap-15">
      <h1 className="text-center text-lg text-4xl font-bold px-5">Register Product Barcode</h1>
      <div className="flex items-center flex-col flex-grow pt-15 px-5 gap-15">
        <p>Enter the product barcode below and click &quot;Register&quot; to register it.</p>
        <p>Make sure you have enough eth to handle the transaction</p>
        <div className="flex justify-center flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl gap-10">
          <input
            className="input text-center input-bordered input-primary w-full max-w-xs rounded-lg p-4"
            type="text"
            value={barcode}
            onChange={e => setBarcode(e.target.value)}
            placeholder="Enter barcode"
          />
          <button className="btn p-4 mt-4 rounded-lg btn-wide" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
