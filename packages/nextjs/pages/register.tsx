import { useState } from "react";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";

const Register = () => {
  const [barcode, setBarcode] = useState("");

  const { refetch } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "isOwne",
    enabled: false,
    onSuccess: (data: unknown) => {
      if (data == true) {
        notification.success("You are contract owner");
      }
    },
  });

  const handleRegister = async () => {
    refetch();
  };

  return (
    <div className="flex items-center flex-col flex-grow pt-15 px-5">
      <h1 className="text-center text-lg text-4xl font-bold px-5">Register Product Barcode</h1>
      <p>Enter the product barcode below and click &quot;Register&quot; to register it.</p>
      <input
        className="input input-bordered input-primary w-full max-w-xs"
        type="text"
        value={barcode}
        onChange={e => setBarcode(e.target.value)}
        placeholder="Enter barcode"
      />
      <button className="btn btn-secondary btn-wide btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;
