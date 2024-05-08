import Image from "next/image";
import Link from "next/link";
import React from "react";
import { countTransactionCategories } from "@/lib/utils";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  const categories: CategoryCount[] = countTransactionCategories(transactions);
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          profile
          <div className="profile-img">
            profile Image
            <span className="text-5xl font-bold text-blue-500">Name</span>
          </div>
          <div className="profile-details">
            detail
            <h1 className="profile-name">firstName & lastName</h1>
            <p className="profile-email">email</p>
          </div>
        </div>
      </section>
      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/" className="flex gap-2">
            <Image alt="plus" src="/icons/plus.svg" width={20} height={20} />
            <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
          </Link>
        </div>

        {/* bank Card */}
        <div className="relative flex flex-1">bankCard</div>

        <div className="mt-10 flex flex-col gap-6">
          <h2 className="header-2">Top Categories</h2>

          <div className="space-y-5">Categories</div>
        </div>
      </section>
    </aside>
  );
};

export default RightSidebar;
