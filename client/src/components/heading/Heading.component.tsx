import React, {Component} from "react";
import { HeadingProperties } from "./base/Heading.properties";
import { HeadingBase } from "./base/Heading.component";
import { Resource } from "../../annotations/resource/Resource";
import { ComponentResources } from "../ComponentResources";
import { HeadingConfiguration } from "./Heading.configuration";

@Resource(ComponentResources.Heading, HeadingConfiguration)
export class Heading extends Component<HeadingProperties> {
    render() {
        const {variant, label} = this.props;
        return (
            <HeadingBase
                label={label}
                variant={variant}/>
        );
    }
}