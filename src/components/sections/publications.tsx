import { PUBLICATIONS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

const PublicationsSection = () => {
    return (
        <SectionWrapper
            className="flex flex-col items-center justify-center min-h-screen sm:min-h-[120vh] py-12 sm:py-20 z-10"
        >
            <div className="w-full max-w-4xl px-4 sm:px-6 md:px-8 mx-auto">
                <SectionHeader
                    id="publications"
                    title="Publications"
                    desc="My research and writings."
                    className="mb-8 sm:mb-12 md:mb-20 mt-0 px-0"
                />

                <div className="flex flex-col gap-8 md:gap-12 relative">
                    {/* Connector Line - simplified to a subtle border */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />

                    {PUBLICATIONS.map((pub, index) => (
                        <div key={pub.id} className="relative">
                            <PublicationCard publication={pub} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

const PublicationCard = ({
    publication,
    index,
}: {
    publication: (typeof PUBLICATIONS)[0];
    index: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
            }}
            viewport={{ once: true, margin: "-50px" }}
        >
            <Card
                className={cn(
                    "bg-card text-card-foreground border-border",
                    "hover:border-primary/20 transition-colors duration-300",
                    "shadow-sm hover:shadow-md"
                )}
            >
                <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-3">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                        <div className="space-y-1">
                            <CardTitle className="text-lg sm:text-xl font-bold tracking-tight">
                                {publication.title}
                            </CardTitle>
                            <div className="text-sm sm:text-base font-medium text-muted-foreground">
                                {publication.conference}
                            </div>
                        </div>
                        <Badge variant="secondary" className="w-fit font-mono text-xs font-normal shrink-0">
                            {publication.date}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-2 sm:pt-0 space-y-4 sm:space-y-6">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {publication.description}
                    </p>

                    <div className="flex justify-end mt-4">
                        <Link
                            href={publication.link}
                            target="_blank"
                            className="bg-black text-white dark:bg-white dark:text-black text-sm px-4 py-2 rounded-md border border-black w-full sm:w-auto flex items-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                        >
                            <LinkIcon className="w-4 h-4" />
                            Read Paper
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default PublicationsSection;
