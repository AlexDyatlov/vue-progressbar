import { computed } from 'vue';
import { ProgressStatus } from '@/types';

const statusIcons: Record<ProgressStatus, string> = {
  [ProgressStatus.Success]: 'check',
  [ProgressStatus.Warning]: 'alert',
  [ProgressStatus.Error]: 'close'
};

export function useProgressbar(status?: ProgressStatus, progress = 0) {
  const progressbarClasses = computed(() => ({
    _empty: progress === 0,
    _success: status === ProgressStatus.Success || progress === 100,
    _warning: status === ProgressStatus.Warning,
    _error: status === ProgressStatus.Error
  }));

  const iconName = computed(() => {
    if (progress === 100) return statusIcons[ProgressStatus.Success];
    return status ? statusIcons[status] : null;
  });

  return { progressbarClasses, iconName };
}
