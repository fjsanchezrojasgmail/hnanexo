import { Injectable } from '@angular/core';
import { OperationBean } from '@oh/hncommons-services/build/bean/operation.bean';

export class Operations {

    //TODO
    public static OP_1 = 'operation1';
    public static OP_2 = 'operation2';
}

/**
 * En esta clase se definen las operaciones disponibles para cada módulo
 */
@Injectable()
export class OperationsService {

    public ORDER_OPERATION: string[];

    //TODO
    /**
     * Operaciones disponibles para el módulo 1
     * @param item
     * @param operationsList 
     */
    getOperationsModule1(item: any, operationsList: any[]): OperationBean[] {
        const operationsModule: OperationBean[] = [];

        operationsModule[Operations.OP_1] =
                    new OperationBean('label.button.operation.1', 'ui-hn-icon icon-archive',
                                   operationsList[Operations.OP_1], false);
        operationsModule[Operations.OP_2] =
                    new OperationBean('label.button.operation.2', 'ui-hn-icon icon-building',
                                   operationsList[Operations.OP_2], false);

        this.initOrderModule1();
        return this.orderOperation(operationsModule);
    }

    //TODO
    /**
     * Orden inicial de las operaciones del módulo 1
     */
    initOrderModule1(){
      this.ORDER_OPERATION = [];
      this.ORDER_OPERATION.push(Operations.OP_1);
      this.ORDER_OPERATION.push(Operations.OP_2);
    }

    /**
     * Método genérico de ordenación de operaciones
     * @param operationsIncluded
     */
    orderOperation(operationsIncluded: OperationBean[]): OperationBean[]{
        const operationsOrder: OperationBean[] = [];
        let operationAux: OperationBean;
        let defaultFlagPresent: boolean = false;

        for (const op of this.ORDER_OPERATION) {
            operationAux = operationsIncluded[op];

            if (operationAux) {
                operationsOrder.push(operationAux);

                if (operationAux.def === true) {
                defaultFlagPresent = true;
                }
            }
        }

        // If none has default flag activated, then set the first one as default
        if (!defaultFlagPresent && operationsOrder.length > 0) {
        operationsOrder[0].def = true;
        }

        return operationsOrder;
    }
}
