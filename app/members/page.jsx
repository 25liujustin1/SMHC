"use client";

import { useState, useEffect } from "react";
import { parse } from "papaparse";
import MemberCard from "../../components/MemberCard";
import MemberDialog from "../../components/MemberDialog";

const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQQF0tSe_PjUFEMwxCvtbuz7-gz08DHEmsNCTl-9xPfKnJ2RLuEU6xBC1tjVkCkUFb6kJXRhMLHd6h5/pub?gid=660899583&single=true&output=csv";
let memberCache = null;

export default function MembersPage() {
  const [members, setMembers] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    if (memberCache) {
      setMembers(memberCache);
      return;
    }
    fetch(SHEET_CSV_URL)
      .then(r => r.text())
      .then(csv => {
        const parsed = parse(csv, {
          header: true,
          skipEmptyLines: true,
          transformHeader: (header) => header.trim().toLowerCase(),
          transform: (value) => value.trim(),
        }).data;
        console.log(parsed);
        memberCache = parsed;
        setMembers(parsed);
      });
  }, []);

  const dialogOpen = Boolean(selectedMember);
  const visibleMembers = (members ?? []).filter(m => {
    if (!m || typeof m !== "object") return false;
    return Object.values(m).some(v => String(v ?? "").trim() !== "");
  });

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            e.target.classList.remove("opacity-0", "translate-y-6");
          }
        }),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [visibleMembers]);

  const showUnderConstruction = members !== null && visibleMembers.length === 0;

  if (showUnderConstruction) {
    return (
      <div>
        <section className="relative h-[70vh] min-h-[320px] bg-saffron overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full border border-cream/15" />
            <div className="absolute -bottom-28 -right-24 w-96 h-96 rounded-full border border-cream/10" />
            <div className="absolute top-10 right-1/4 w-40 h-40 bg-cream/6 blur-3xl rounded-full" />
            <div className="absolute bottom-4 left-10 w-32 h-32 bg-gold-light/10 blur-2xl rounded-full" />
          </div>

          <div className="relative h-full flex items-center justify-center">
            <div className="mx-auto w-full max-w-4xl px-6 text-center">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-3">
                Meet Our Members!
              </h1>
              <p className="max-w-2xl mx-auto text-sm sm:text-base text-navy/85">
                Our collective is made up of Sikhs from diverse backgrounds, all committed to
                compassionate, culturally grounded mental wellness.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-6 pt-10 pb-12">
          <div className="py-16 text-center text-xl font-semibold text-gray-900">
            page under construction
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="relative h-[70vh] min-h-[320px] bg-saffron overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full border border-cream/15" />
          <div className="absolute -bottom-28 -right-24 w-96 h-96 rounded-full border border-cream/10" />
          <div className="absolute top-10 right-1/4 w-40 h-40 bg-cream/6 blur-3xl rounded-full" />
          <div className="absolute bottom-4 left-10 w-32 h-32 bg-gold-light/10 blur-2xl rounded-full" />
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="mx-auto w-full max-w-4xl px-6 text-center">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-3">
              Meet Our Members!
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-navy/85">
              Our collective is made up of Sikhs from diverse backgrounds, all committed to
              compassionate, culturally grounded mental wellness.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 pt-10 pb-12">
        <div className="flex flex-wrap justify-center gap-6">
          {visibleMembers.map((m, idx) => {
            const name = m?.name ?? "";
            const email = m?.email ?? "";
            const photo = m?.photo ?? "";
            const bio = m?.bio ?? "";

            return (
              <div
                key={email || `${name}-${idx}`}
                className="reveal opacity-0 translate-y-6 transition-all duration-700 w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] flex justify-center"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <MemberCard
                  name={name}
                  email={email}
                  photo={photo}
                  bio={bio}
                  imageUrl={photo}
                  disabled={dialogOpen}
                  onClick={() => setSelectedMember({ name, email, bio, imageUrl: photo })}
                />
              </div>
            );
          })}
        </div>

        <MemberDialog
          open={dialogOpen}
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      </div>
    </div>
  );
}