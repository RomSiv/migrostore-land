import React, { useState } from "react";
import s from "./MessageForm.module.css";
import logo from "../../images/Illustration.svg";
import Modal from "../Modal/Modal";
import { useForm } from "react-hook-form";

export default function MessageForm() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onSubmit" });

  const [modalActive, setModalAktive] = useState(false);

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className={s.container}>
      <img
        src={logo}
        alt="migro store"
      />
      <div>
        <h3>
          Feel free to contact us any time. We wiil get back contact to you as
          soon as we can!
        </h3>
        <form onSubmit={handleSubmit(submit)}>
          <label className={s.input}>
            <input
            type="text"
              {...register("name", {
                required: "Required field",
              })}
            />

            <span className={s.placeholder}>Name</span>
            <div className={s.errors}>
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </div>
          </label>

          <label className={s.input}>
            <input
              {...register("email", {
                required: "Required field",
                minLength: {
                  value: 3,
                  message: "Invalid email format",
                },
              })}
            />
            <span className={s.placeholder}>Email</span>
            <div className={s.errors}>
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </div>
          </label>

          <label className={s.input}>
            <input
              {...register("message", {
                required: "Required field",
              })}
            />
            <span className={s.placeholder}>Massage</span>
            <div className={s.errors}>
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </div>
          </label>

          <button
            type="submit"
            onClick={() => (isValid ? setModalAktive(true) : "")}
          >
            Send message
          </button>
        </form>
      </div>
      {modalActive && <Modal />}
    </div>
  );
}
