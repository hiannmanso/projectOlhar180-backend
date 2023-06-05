
export interface Tasks{
    id?:number,
    title:string,
    describe:string,
    finalDate:string,
    priority:Priority
    status?:Status
}
type Priority = 'alta' | 'media' | 'baixa';
type Status = 'pendente' |'feito';