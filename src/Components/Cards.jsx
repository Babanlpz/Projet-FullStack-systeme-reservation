import { db } from "../Firebase/firebaseConfig";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

export default function Cards() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "rdv"));
        const appointmentList = [];
        querySnapshot.forEach((doc) => {
          appointmentList.push({ id: doc.id, ...doc.data() });
          setAppointments(appointmentList);
        });
      } catch (error) {
        console.error("Erreur lors de la récupération des rendez-vous", error);
      }
      getAppointments();
    };

    getAppointments();
  }, []);

  return (
    <>
      <h2 className="font-bold text-center text-2xl uppercase text-amber-900">
        Liste des rendez-vous
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-20">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="bg-white p-4 rounded-md shadow-md"
          >
            <h2 className="text-xl font-bold mb-2">
              {appointment.firstName} {appointment.lastName}
            </h2>
            <p className="text-gray-600 mb-2">
              <b>Email:</b> {appointment.email}
            </p>
            <p className="text-gray-600 mb-2">
              <b>Téléphone:</b> {appointment.phone}
            </p>
            <p className="text-gray-600 mb-2">
              <b>Date:</b> {appointment.date}
            </p>
            <p className="text-gray-600 mb-2">
              <b>Heure:</b> {appointment.time}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
