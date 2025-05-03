// Local Imports
//import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { Card } from "components/ui";

// ----------------------------------------------------------------------

const countries = [
  {
    uid: "1",
    flag: "/images/flags/svg/rounded/australia.svg",
    name: "Branch 1",
    sales: "11",
    impression: 2,
  },
  {
    uid: "2",
    flag: "/images/flags/svg/rounded/brazil.svg",
    name: "Branch 2",
    sales: "7",
    impression: 1,
  },
  {
    uid: "3",
    flag: "/images/flags/svg/rounded/china.svg",
    name: "Branch 3",
    sales: "5",
    impression: 1,
  },
  {
    uid: "4",
    flag: "/images/flags/svg/rounded/india.svg",
    name: "Branch 4",
    sales: "5",
    impression: -1,
  },
  {
    uid: "5",
    flag: "/images/flags/svg/rounded/italy.svg",
    name: "Branch 5",
    sales: "4",
    impression: 1,
  },
  {
    uid: "6",
    flag: "/images/flags/svg/rounded/japan.svg",
    name: "Branch 6",
    sales: "3",
    impression: 1,
  },
  {
    uid: "7",
    flag: "/images/flags/svg/rounded/russia.svg",
    name: "Branch 7",
    sales: "1",
    impression: -1,
  },
  {
    uid: "8",
    flag: "/images/flags/svg/rounded/spain.svg",
    name: "Branch 8",
    sales: "1",
    impression: 1,
  },
];

export function TopCountries() {
  return (
    <Card className="px-4 pb-5 sm:px-5">
      <div className="flex h-14 min-w-0 items-center justify-between py-3">
        <h2 className="truncate font-medium tracking-wide text-gray-800 dark:text-dark-100">
          Top Branchs
        </h2>
        
      </div>
      <div>
        <p>
          <span className="text-2xl text-gray-800 dark:text-dark-100">64</span>
        </p>
        <p className="text-xs-plus">Branchs</p>
      </div>
      <div className="mt-5 space-y-4">
        {countries.map((country) => (
          <div
            key={country.uid}
            className="flex items-center justify-between gap-2"
          >
            <div className="flex min-w-0 items-center gap-2">
              <img className="size-6" src={country.flag} alt={country.name} />
              <a
                href="##"
                className="truncate transition-opacity hover:opacity-80"
              >
                {country.name}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm-plus text-gray-800 dark:text-dark-100">
                {country.sales} /  {country.impression}
              </p>
               
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
