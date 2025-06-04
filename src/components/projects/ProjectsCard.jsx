"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectCard({ project, button = true }) {
  const [showPreview, setShowPreview] = useState(false);

  const openPreview = () => setShowPreview(true);
  const closePreview = () => setShowPreview(false);

  return (
    <>
      <div className="bg-white dark:bg-zinc-900 border-2 border-dashed border-gray-400 dark:border-gray-600 rounded-2xl p-4 shadow-md hover:shadow-xl transition-transform flex flex-col justify-between min-h-[450px]">
        <div>
          {/* Gambar Project */}
          <div
            className="w-full h-44 relative cursor-pointer rounded-xl overflow-hidden group"
            onClick={openPreview}
          >
            <Image
              src={project.img}
              alt={project.name}
              width={400}
              height={250}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <VisibilityIcon className="text-white text-3xl" />
            </div>
          </div>

          {/* Nama & Deskripsi */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">
              {project.name}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </div>
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech?.map((item, index) => (
            <span
              key={index}
              className="font-medium text-sm text-dark dark:text-secondary mt-2 px-3 py-1 border border-gray-400 dark:border-stroke rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Tombol View Project & GitHub */}
        {button && (
          <div className="mt-4 flex gap-3">
            {project.path !== "-" ? (
              <Link
                href={project.path}
                target="_blank"
                className={
                  project.github && project.github !== "-"
                    ? "basis-[70%]"
                    : "w-full"
                }
              >
                <button className="w-full bg-primary font-semibold text-tertiary px-5 py-2 rounded-full shadow hover:bg-[#f5c23d] transition-all duration-300 hover:shadow-md">
                  View Project
                </button>
              </Link>
            ) : (
              <button
                disabled
                className={`bg-gray-400 font-semibold text-tertiary px-5 py-2 rounded-full shadow cursor-not-allowed opacity-70 ${
                  project.github && project.github !== "-"
                    ? "basis-[70%]"
                    : "w-full"
                }`}
              >
                Not Available
              </button>
            )}

            {/* Tombol GitHub */}
            {project.github && project.github !== "-" && (
              <Link href={project.github} target="_blank" className="flex-1">
                <button className="w-full bg-neutral-800 text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-black transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2">
                  <GitHubIcon />
                  {/* Github */}
                </button>
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Modal Preview */}
      {showPreview && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={closePreview}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.img}
              alt={project.name}
              className="max-w-[100vw] max-h-[95vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-primary text-tertiary w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#f5c23d] transition-colors z-10"
              onClick={closePreview}
            >
              <CloseIcon />
            </button>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full inline-block">
                {project.name}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
