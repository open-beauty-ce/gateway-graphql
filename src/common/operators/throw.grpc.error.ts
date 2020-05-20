import { tap } from 'rxjs/operators';

export const throwGrpcError = (): any => tap<any>({
  error(err) {
    throw new Error(err.details);
  },
});
