import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../Firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "rdv"), data);
      console.log(docRef.id);
      reset();
      toast.success("Rendez-vous ajouté avec succès");
    } catch (error) {
      toast.error("Erreur lors de l'ajout du rendez-vous");
      console.error(
        "Une erreur est survenue lors de l'ajout du rendez-vous",
        error
      );
    }
  };

  return (
    <div className="max-w-[400px] w-full bg-white p-6 rounded-md shadow-md">
      <h1 className="text-4xl mb-4 font-bold uppercase text-amber-600">
        Réservations
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <label htmlFor="firstName" className="block">
            Prénom
          </label>
          <input
            {...register("firstName", { required: "Ce champ est requis" })}
            id="firstName"
            type="text"
            className="outline-none form-input mt-1 block w-full border-b border-b-gray-300"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block">
            Nom
          </label>
          <input
            {...register("lastName", { required: "Ce champ est requis" })}
            id="lastName"
            type="text"
            className="outline-none form-input mt-1 block w-full border-b border-b-gray-300"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            {...register("email", {
              required: "Ce champ est requis",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Adresse email invalide",
              },
            })}
            id="email"
            type="email"
            className="outline-none form-input mt-1 block w-full border-b border-b-gray-300"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block">
            Téléphone
          </label>
          <input
            {...register("phone", {
              required: "Ce champ est requis",
              pattern: {
                value: /^\d{10}$/,
                message: "Numéro de téléphone invalide",
              },
            })}
            id="phone"
            type="phone"
            className="outline-none form-input mt-1 block w-full border-b border-b-gray-300"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block">
            Date du rendez-vous
          </label>
          <input
            {...register("date", { required: "Ce champ est requis" })}
            id="date"
            type="date"
            className="border border-gray-300 p-3 rounded-md outline-none form-input mt-1 block w-full border-b border-b-gray-300"
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block">
            Heure du rendez-vous
          </label>
          <input
            {...register("time", { required: "Ce champ est requis" })}
            id="time"
            type="time"
            className="border border-gray-300 p-3 rounded-md outline-none form-input mt-1 block w-full border-b border-b-gray-300"
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
          )}
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Réserver
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}
