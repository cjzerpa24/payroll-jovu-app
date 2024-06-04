/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { EmployeeService } from "../employee.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EmployeeCreateInput } from "./EmployeeCreateInput";
import { Employee } from "./Employee";
import { EmployeeFindManyArgs } from "./EmployeeFindManyArgs";
import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";
import { EmployeeUpdateInput } from "./EmployeeUpdateInput";
import { PayrollFindManyArgs } from "../../payroll/base/PayrollFindManyArgs";
import { Payroll } from "../../payroll/base/Payroll";
import { PayrollWhereUniqueInput } from "../../payroll/base/PayrollWhereUniqueInput";
import { SalaryFindManyArgs } from "../../salary/base/SalaryFindManyArgs";
import { Salary } from "../../salary/base/Salary";
import { SalaryWhereUniqueInput } from "../../salary/base/SalaryWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EmployeeControllerBase {
  constructor(
    protected readonly service: EmployeeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Employee })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createEmployee(
    @common.Body() data: EmployeeCreateInput
  ): Promise<Employee> {
    return await this.service.createEmployee({
      data: {
        ...data,

        department: data.department
          ? {
              connect: data.department,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        dateOfJoining: true,

        department: {
          select: {
            id: true,
          },
        },

        email: true,
        firstName: true,
        id: true,
        lastName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Employee] })
  @ApiNestedQuery(EmployeeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async employees(@common.Req() request: Request): Promise<Employee[]> {
    const args = plainToClass(EmployeeFindManyArgs, request.query);
    return this.service.employees({
      ...args,
      select: {
        createdAt: true,
        dateOfJoining: true,

        department: {
          select: {
            id: true,
          },
        },

        email: true,
        firstName: true,
        id: true,
        lastName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async employee(
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Employee | null> {
    const result = await this.service.employee({
      where: params,
      select: {
        createdAt: true,
        dateOfJoining: true,

        department: {
          select: {
            id: true,
          },
        },

        email: true,
        firstName: true,
        id: true,
        lastName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateEmployee(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() data: EmployeeUpdateInput
  ): Promise<Employee | null> {
    try {
      return await this.service.updateEmployee({
        where: params,
        data: {
          ...data,

          department: data.department
            ? {
                connect: data.department,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          dateOfJoining: true,

          department: {
            select: {
              id: true,
            },
          },

          email: true,
          firstName: true,
          id: true,
          lastName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteEmployee(
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Employee | null> {
    try {
      return await this.service.deleteEmployee({
        where: params,
        select: {
          createdAt: true,
          dateOfJoining: true,

          department: {
            select: {
              id: true,
            },
          },

          email: true,
          firstName: true,
          id: true,
          lastName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/payrolls")
  @ApiNestedQuery(PayrollFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Payroll",
    action: "read",
    possession: "any",
  })
  async findPayrolls(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Payroll[]> {
    const query = plainToClass(PayrollFindManyArgs, request.query);
    const results = await this.service.findPayrolls(params.id, {
      ...query,
      select: {
        createdAt: true,
        date: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        totalAmount: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/payrolls")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async connectPayrolls(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: PayrollWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payrolls: {
        connect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/payrolls")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async updatePayrolls(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: PayrollWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payrolls: {
        set: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/payrolls")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async disconnectPayrolls(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: PayrollWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payrolls: {
        disconnect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/salaries")
  @ApiNestedQuery(SalaryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Salary",
    action: "read",
    possession: "any",
  })
  async findSalaries(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Salary[]> {
    const query = plainToClass(SalaryFindManyArgs, request.query);
    const results = await this.service.findSalaries(params.id, {
      ...query,
      select: {
        allowances: true,
        basic: true,
        createdAt: true,
        deductions: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        netPay: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/salaries")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async connectSalaries(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: SalaryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      salaries: {
        connect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/salaries")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async updateSalaries(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: SalaryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      salaries: {
        set: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/salaries")
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async disconnectSalaries(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: SalaryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      salaries: {
        disconnect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }
}
