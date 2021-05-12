// import { applyDecorators, SetMetadata } from '@nestjs/common';
// import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
// import { AuthGuard } from 'src/guards/auth.guard';
// import { RolesGuard } from 'src/guards/roles.guard';

// export function Auth(...roles: Role[]) {
//   return applyDecorators(
//     SetMetadata('roles', roles),
//     UseGuards(AuthGuard, RolesGuard),
//     ApiBearerAuth(),
//     ApiUnauthorizedResponse({ description: 'Unauthorized' }),
//   );
// }