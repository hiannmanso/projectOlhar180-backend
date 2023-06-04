
export interface Tasks{
    id?:number,
    title:string,
    describe:string,
    finalDate:string,
    priority:Priority
}
type Priority = 'alta' | 'media' | 'baixa';