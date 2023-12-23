import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const Products = () => {
  return (
    <section className="flex justify-between items-end">
      <div>
        <h3>All Expiry Reminders</h3>
        <p>Here you can see all your objects.</p>
      </div>
      <Link href="/dashboard/products/add">
        <Button shadow color="primary">
          Add Product
        </Button>
      </Link>
    </section>
  );
};
