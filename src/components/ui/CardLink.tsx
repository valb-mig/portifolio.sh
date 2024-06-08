interface CardLinkProps {
    title: string;
    description?: string;
    href?: string;
}

const CardLink = ({ href, title, description }: CardLinkProps) => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <a
            className="block rounded-xl bg-shade-4 border border-shade-2 p-8 shadow-xl transition hover:border-primary hover:shadow-primary/10"
            href={href}
        >
            <h3 className="mt-4 text-xl font-bold text-foreground-1">
                { title }
            </h3>

            {description && (
                <p className="mt-1 text-sm text-foreground-5">
                    { description }
                </p>
            )}
        </a>
    </div>
  );
}

export default CardLink;