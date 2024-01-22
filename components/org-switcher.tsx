"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { CheckIcon, PlusCircleIcon } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const organizations = [
  { label: "alhammadmedical", value: "alhammadmedical" },
  { label: "personal", value: "personal" },
];

type Org = (typeof organizations)[number];

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;
interface OrgSwitcherProps extends PopoverTriggerProps {}

export function OrgSwitcher({ className }: OrgSwitcherProps) {
  const [open, setOpen] = React.useState(false);
  const [showNewOrgDialog, setShowNewOrgDialog] = React.useState(false);
  const [selectedOrg, setSelectedOrg] = React.useState<Org>(organizations[0]);
  return (
    <Dialog open={showNewOrgDialog} onOpenChange={setShowNewOrgDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select organization"
            className={cn("w-[250px] justify-between", className)}
          >
            {selectedOrg.label}
            <CaretSortIcon className="ml-auto size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0" align="start">
          <Command>
            <CommandList>
              <CommandInput placeholder="Search org..." />
              <CommandEmpty>No org found</CommandEmpty>
              {organizations.map((org) => (
                <CommandGroup key={org.value}>
                  <CommandItem
                    onSelect={() => {
                      setSelectedOrg(org);
                      setOpen(false);
                    }}
                    className="text-sm"
                  >
                    {org.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto size-4",
                        selectedOrg.value === org.value
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                  </CommandItem>
                </CommandGroup>
              ))}
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false);
                      setShowNewOrgDialog(true);
                    }}
                  >
                    <PlusCircleIcon className="mr-2 size-4" />
                    Create Organization
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create organization</DialogTitle>
          <DialogDescription>
            Add a new organization to group assets and subscriptions.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Organization name</Label>
              <Input
                id="name"
                autoComplete="off"
                data-1p-ignore //disables 1Password autocomplete
                data-lpignore // disables LastPass autocomplete
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewOrgDialog(false)}>
            Cancel
          </Button>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
