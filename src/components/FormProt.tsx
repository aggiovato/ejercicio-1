import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormValues } from "../utils/schemas";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

import "../styles/FormProt.css";
import Buttons from "./Buttons";

const FormProt: React.FC = () => {
  const [rating, setRating] = useState(0); // state of starRaiting
  const [isSaved, setIsSaved] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    country: "",
    email: "",
    url: "",
    age: 18,
    phoneNumber: +34,
    profession: "",
    date: "",
    datetime: "",
    time: "",
    rate: 0,
    search: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
      setIsSaved(true);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };

    setFormData(updatedFormData);

    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  }); // hook useForm

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  }; // onSubmit

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    let value = parseInt(e.currentTarget.value);
    if (value < -10) value = -10;
    if (value > 10) value = 10;

    const displayValue = document.getElementById("rate");
    if (displayValue) {
      displayValue.textContent = value.toString();
    }

    setRating(value);
  }; // handleInputChange

  const renderStars = () => {
    const stars = [];

    if (rating < 0) {
      for (let i = 0; i < Math.abs(rating); i++) {
        stars.push(<FaStar key={i} color="red" />);
      }
    } else if (rating === 0) {
      for (let i = 0; i < 10; i++) {
        stars.push(<FaStar key={i} color="gray" />);
      }
    } else {
      for (let i = 0; i < rating; i++) {
        stars.push(<FaStar key={i} color="gold" />);
      }
    }

    return stars;
  }; // renderStars

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container my-5 form-container mx-10 px-10"
      style={{ width: "800px" }}
    >
      <div className="row">
        <div className="col-md-7">
          {/* username */}
          <div className="input-group mb-3">
            <i className="bi bi-person-add input-group-text"></i>
            <input
              type="text"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              id="username"
              placeholder="Username"
              value={isSaved ? formData.username : ""}
              onInput={handleInputChange}
              {...register("username")}
            />
            {errors.username && (
              <small className="invalid-feedback">
                {errors.username.message}
              </small>
            )}
          </div>

          {/* country */}
          <div className="input-group mb-3">
            <i className="bi bi-geo input-group-text"></i>
            <input
              type="text"
              className={`form-control ${errors.country ? "is-invalid" : ""}`}
              id="country"
              placeholder="Country"
              value={isSaved ? formData.country : ""}
              onInput={handleInputChange}
              {...register("country")}
            />
            {errors.country && (
              <div className="invalid-feedback">{errors.country.message}</div>
            )}
          </div>

          {/* email */}
          <div className="input-group mb-3">
            <i className="bi bi-envelope-at input-group-text"></i>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              placeholder="Email"
              value={isSaved ? formData.email : ""}
              onInput={handleInputChange}
              {...register("email")}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          {/* url */}
          <div className="input-group mb-3">
            <i className="bi bi-link-45deg input-group-text"></i>
            <input
              type="url"
              className={`form-control ${errors.url ? "is-invalid" : ""}`}
              id="url"
              placeholder="Website URL"
              value={isSaved ? formData.url : ""}
              onInput={handleInputChange}
              {...register("url")}
            />
            {errors.url && (
              <div className="invalid-feedback">{errors.url.message}</div>
            )}
          </div>

          {/* age */}
          <div className="flex mb-3 mx-5 px-5">
            <div className="row">
              <div className="col-md-2 mt-1 d-flex justify-content-end">
                <label htmlFor="age">Age</label>
              </div>
              <div className="col-md-9">
                <input
                  type="number"
                  className={`form-control ${errors.age ? "is-invalid" : ""}`}
                  id="age"
                  value={isSaved ? formData.age : ""}
                  onInput={handleInputChange}
                  {...register("age", { valueAsNumber: true })}
                />
                {errors.age && (
                  <div className="invalid-feedback">{errors.age.message}</div>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            {/* phoneNumber */}
            <div className="col-md-6">
              <input
                type="text"
                className={`form-control ${
                  errors.phoneNumber ? "is-invalid" : ""
                }`}
                id="phoneNumber"
                placeholder="Phone number"
                value={isSaved ? formData.phoneNumber : ""}
                onInput={handleInputChange}
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <div className="invalid-feedback">
                  {errors.phoneNumber.message}
                </div>
              )}
            </div>
            {/* profession */}
            <div className="col-md-6">
              <input
                type="text"
                className={`form-control ${
                  errors.profession ? "is-invalid" : ""
                }`}
                id="profession"
                placeholder="Profession"
                value={isSaved ? formData.profession : ""}
                onInput={handleInputChange}
                {...register("profession")}
              />
              {errors.profession && (
                <div className="invalid-feedback">
                  {errors.profession.message}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="d-flex row mb-3 justify-content-between">
            {/* date */}
            <div className="col-md-6">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className={`form-control ${errors.date ? "is-invalid" : ""}`}
                id="date"
                value={isSaved ? formData.date : ""}
                onInput={handleInputChange}
                {...register("date")}
              />
              {errors.date && (
                <div className="invalid-feedback">{errors.date.message}</div>
              )}
            </div>

            {/* time */}
            <div className="col-md-6">
              <label htmlFor="time" className="form-label">
                Time
              </label>
              <input
                type="time"
                className={`form-control ${errors.time ? "is-invalid" : ""}`}
                id="time"
                value={isSaved ? formData.time : ""}
                onInput={handleInputChange}
                {...register("time")}
              />
              {errors.time && (
                <div className="invalid-feedback">{errors.time.message}</div>
              )}
            </div>
          </div>

          {/* datetime */}
          <div className="mb-3">
            <label htmlFor="datetime" className="form-label">
              Date-time
            </label>
            <input
              type="datetime-local"
              className={`form-control ${errors.datetime ? "is-invalid" : ""}`}
              id="datetime"
              value={isSaved ? formData.datetime : ""}
              onInput={handleInputChange}
              {...register("datetime")}
            />
            {errors.datetime && (
              <div className="invalid-feedback">{errors.datetime.message}</div>
            )}
          </div>

          {/* rate */}
          <div className="d-flex row mb-3 justify-content-between">
            <div className="col-md-4">
              <label htmlFor="datetime" className="form-label">
                Rate us!
              </label>
              <input
                type="number"
                className={`form-control ${errors.rate ? "is-invalid" : ""}`}
                id="rate"
                onInput={handleInput}
                {...register("rate", { valueAsNumber: true })}
              />
              {errors.rate && (
                <div className="invalid-feedback">{errors.rate.message}</div>
              )}
            </div>
            <div className="flex col-md-8 mt-4 pt-3">{renderStars()}</div>
          </div>

          {/* search */}
          <div>
            <label htmlFor="search" className="form-label">
              Search
            </label>
            <input
              type="search"
              className={`form-control ${errors.search ? "is-invalid" : ""}`}
              id="search"
              value={isSaved ? formData.search : ""}
              onInput={handleInputChange}
              {...register("search")}
            />
            {errors.search && (
              <div className="invalid-feedback">{errors.search.message}</div>
            )}
          </div>
        </div>
      </div>

      <div className="row mt-3 d-flex justify-content-center">
        <div className="col-md-4 d-flex justify-content-center">
          <Buttons bt_type="submit_en" />
        </div>

        <div className="col-md-4 d-flex justify-content-center">
          <Buttons bt_type="clean_en" />
        </div>
      </div>
    </form>
  );
};

export default FormProt;
