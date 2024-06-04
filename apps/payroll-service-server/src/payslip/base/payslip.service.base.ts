/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Payslip as PrismaPayslip,
  Payroll as PrismaPayroll,
  Salary as PrismaSalary,
} from "@prisma/client";

export class PayslipServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PayslipCountArgs, "select">): Promise<number> {
    return this.prisma.payslip.count(args);
  }

  async payslips<T extends Prisma.PayslipFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PayslipFindManyArgs>
  ): Promise<PrismaPayslip[]> {
    return this.prisma.payslip.findMany<Prisma.PayslipFindManyArgs>(args);
  }
  async payslip<T extends Prisma.PayslipFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PayslipFindUniqueArgs>
  ): Promise<PrismaPayslip | null> {
    return this.prisma.payslip.findUnique(args);
  }
  async createPayslip<T extends Prisma.PayslipCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PayslipCreateArgs>
  ): Promise<PrismaPayslip> {
    return this.prisma.payslip.create<T>(args);
  }
  async updatePayslip<T extends Prisma.PayslipUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PayslipUpdateArgs>
  ): Promise<PrismaPayslip> {
    return this.prisma.payslip.update<T>(args);
  }
  async deletePayslip<T extends Prisma.PayslipDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PayslipDeleteArgs>
  ): Promise<PrismaPayslip> {
    return this.prisma.payslip.delete(args);
  }

  async getPayroll(parentId: string): Promise<PrismaPayroll | null> {
    return this.prisma.payslip
      .findUnique({
        where: { id: parentId },
      })
      .payroll();
  }

  async getSalary(parentId: string): Promise<PrismaSalary | null> {
    return this.prisma.payslip
      .findUnique({
        where: { id: parentId },
      })
      .salary();
  }
}
