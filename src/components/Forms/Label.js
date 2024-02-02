"use client";

export default function Label(props) {
  return (
    <label 
      className="text-xs text-typography-gray flex items-center justify-between"
      {...props}
    />
  );
}