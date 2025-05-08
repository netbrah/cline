import * as Sentry from "@sentry/browser"
import * as vscode from "vscode"
import * as pkg from "../../../package.json"

export class ErrorService {
	private static serviceEnabled: boolean
	private static serviceLevel: string

	static initialize() {}

	static toggleEnabled(state: boolean) {}

	static setLevel(level: "error" | "all") {}

	static logException(error: Error): void {}

	static logMessage(message: string, level: "error" | "warning" | "log" | "debug" | "info" = "log"): void {}

	static isEnabled(): boolean {
		return ErrorService.serviceEnabled
	}
}
