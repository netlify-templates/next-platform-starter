import { Card } from './card';

export function CardsGrid({ cards }) {
    return <section className="grid gap-6 sm:grid-cols-3">{!!cards?.length && cards.map((card, index) => <Card key={index} {...card} />)}</section>;
}
