import React from "react";
import { ResponsiveGrid as AemResponsiveGrid } from "@adobe/cq-react-editable-components";
import { Editable } from "./EditableComponent";
import { ComponentResources } from "src/components/ComponentResources";

export function ResponsiveGrid(resource: ComponentResources) {
    return (WrappedComponent: any) => {
        return Editable(resource, undefined, true)
            (class extends AemResponsiveGrid {
                render() {
                    return (
                    <WrappedComponent 
                        className={`${(super.containerProps.className || '')}  ${this.props.gridClassNames}`}
                        {...this.props} >
                            {super.childComponents}
                            {super.placeholderComponent} 
                        </WrappedComponent>
                    );
                }
            } as any)
    }
}