import { createColumnHelper } from "@tanstack/react-table";
import {
  Building,
  Calendar,
  IdCard,
  Magnet,
  Mail,
  RollerCoaster,
  Satellite,
} from "lucide-react";
let columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    header: () => (
      <span>
        <IdCard size={20} />
        Id
      </span>
    ),
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => (
      <span>
        <IdCard size={20} />
        Name
      </span>
    ),
  }),
  columnHelper.accessor("email", {
    cell: (info) => info.getValue(),
    header: () => (
      <span>
        <Mail size={20} />
        Email
      </span>
    ),
  }),
  columnHelper.accessor("role", {
    cell: (info) => info.getValue(),
    header: () => (
      <span>
        <RollerCoaster size={20} />
        Role
      </span>
    ),
  }),
  columnHelper.accessor("status", {
    cell: (info) => info.getValue(),
    header: () => (
      <span>
        <Satellite size={20} />
        Status
      </span>
    ),
  }),
  columnHelper.accessor("age", {
    cell: (info) => info.getValue(),
    header: () => (
      <span>
        <Magnet size={20} />
        Age
      </span>
    ),
  }),

  columnHelper.accessor("department", {
    cell: (info) => info.getValue(),
    header: () => (
      <span>
        <Building size={20} />
        Department
      </span>
    ),
  }),
  columnHelper.accessor("createdAt", {
    cell: (info) => info.getValue(),
    header: () => (
      <span>
        <Calendar size={20} />
        Created At
      </span>
    ),
  }),
];
