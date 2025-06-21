import { Link } from "react-router-dom";
import React from "react";

type RouteItem = {
  title: string;
  to: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type NavigationGridPageProps = {
  title: string;
  routes: RouteItem[];
};

export default function NavigationGridPage({ title, routes }: NavigationGridPageProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">{title}</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {routes.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              to={item.to}
              key={index}
              className="bg-white border border-green-100 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all rounded-xl p-5 flex items-center space-x-4 group"
            >
              {Icon && (
                <div className="p-3 bg-green-50 rounded-full group-hover:bg-green-100 transition">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-green-800 group-hover:text-green-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">Click to proceed</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
