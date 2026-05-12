"use client";

import { useMemo } from "react";
import { MailIcon, TelIcon, UserIcon } from "@/assets/icons";
import { useConsultationForm } from "@/app/components/sections/consultation/consultation-form.hooks";
import { InputField } from "@/app/components/ui/form/input-field";
import { ServiceItem } from "@/app/components/ui/form/service-item";
import { SERVICE_OPTIONS } from "@/app/constants/form.constants";

export default function ConsultationForm() {
  const { form, errors, isSubmitting, setField, toggleService, submit } =
    useConsultationForm();

  const selectedServices = useMemo(
    () => new Set(form.services),
    [form.services],
  );

  return (
    <section dir="rtl" className="overflow-hidden px-4 py-16">
      <div className="max-w-width mx-auto">
        <div className="mb-6 text-center">
          <h2 className="text-text-secondary text-xl font-black">
            فرم دریافت مشاوره
          </h2>

          <p className="text-text-secondary max-w-width mx-auto mt-5 text-sm leading-8 font-medium md:text-base">
            برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید؟ فرم زیر را تکمیل
            کنید تا مشاوران ما به صورت کاملاً رایگان شما را راهنمایی کنند.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-xl bg-white p-6 shadow-sm md:p-8">
          <form onSubmit={submit} className="space-y-8" noValidate>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              <InputField
                label="نام و نام خانوادگی"
                placeholder="نام و نام خانوادگی خود را وارد کنید"
                value={form.fullName}
                onChange={setField("fullName")}
                error={errors.fullName}
                Icon={UserIcon}
              />

              <InputField
                label="آدرس ایمیل خود را وارد کنید"
                placeholder="مثلا email@mail.com"
                value={form.email}
                onChange={setField("email")}
                error={errors.email}
                type="email"
                Icon={MailIcon}
              />

              <InputField
                label="شماره تماس خود را وارد کنید"
                placeholder="مثلا ۰۹۱۲۳۴۵۶۷۸۹"
                value={form.phone}
                onChange={setField("phone")}
                error={errors.phone}
                Icon={TelIcon}
              />
            </div>

            <div className="space-y-4">
              <label className="text-text-secondary block text-sm font-semibold">
                نوع سرویس(های) مورد نظر خود را انتخاب کنید.
              </label>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                {SERVICE_OPTIONS.map((service) => (
                  <ServiceItem
                    key={service}
                    label={service}
                    checked={selectedServices.has(service)}
                    onToggle={toggleService}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-text-secondary text-sm font-semibold">
                در مورد درخواست خود برای ما بنویسید.
              </label>

              <textarea
                rows={4}
                value={form.description}
                onChange={setField("description")}
                placeholder="توضیحات اختیاری"
                className={`placeholder:text-text-disabled w-full resize-none rounded-2xl border bg-[#f9f9f9] p-4 text-sm transition-all outline-none focus:border-black ${
                  errors.description ? "border-red-500" : "border-border"
                }`}
              />

              {errors.description && (
                <span className="text-xs text-red-500">
                  {errors.description}
                </span>
              )}
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-text-secondary h-12 w-sm items-center justify-center rounded-3xl px-8 text-sm font-bold text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "در حال ارسال..." : "ثبت درخواست"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
