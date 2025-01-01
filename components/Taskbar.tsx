"use client"
import { TaskBar, List } from "@react95/core";
import { WindowsExplorer, ReaderClosed } from "@react95/icons";

export function Taskbar() {
    return (
        <>
            <TaskBar list={<List>
                <List.Item icon={<ReaderClosed variant="32x32_4" />} >
                    Local Disk (C:)
                </List.Item>
                <List.Item icon={<WindowsExplorer variant="32x32_4" />} >
                    Windows Explorer
                </List.Item>
            </List>} />
        </>
    )
}